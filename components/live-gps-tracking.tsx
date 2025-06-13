"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation, Pause, Play, Clock, AlertTriangle, Route } from "lucide-react";
import { useGPSTracking } from "@/hooks/use-gps-tracking";
import { GPSConnectionStatus } from "./gps-connection-status";

interface VehicleLocation {
  id: string;
  name: string;
  driver: string;
  lat: number;
  lng: number;
  speed: number;
  heading: number;
  status: "moving" | "stopped" | "idle" | "offline";
  alerts: string[];
}

export function LiveGPSTracking() {
  const LiveMap = useMemo(() => dynamic(() => import('@/components/live-map').then(mod => mod.LiveMap), {
    loading: () => <p className="p-4 text-center">Loading map...</p>,
    ssr: false
  }), []);

  const { isConnected, startTracking, stopTracking } = useGPSTracking({
    updateInterval: 3000,
  });

  // Update vehicle coordinates to be around Jakarta
  const [vehicles, setVehicles] = useState<VehicleLocation[]>([
    { id: "FL-001", name: "Ford Transit", driver: "Budi Santoso", lat: -6.21, lng: 106.84, speed: 45, heading: 90, status: "moving", alerts: [] },
    { id: "FL-002", name: "Toyota Avanza", driver: "Siti Aminah", lat: -6.19, lng: 106.83, speed: 0, heading: 210, status: "stopped", alerts: ["Low Fuel"] },
    { id: "FL-003", name: "Daihatsu Gran Max", driver: "Eko Prasetyo", lat: -6.22, lng: 106.85, speed: 30, heading: 320, status: "moving", alerts: [] },
    { id: "FL-004", name: "Suzuki Carry", driver: "Unassigned", lat: -6.23, lng: 106.82, speed: 0, heading: 0, status: "idle", alerts: []},
    { id: "FL-005", name: "Isuzu Panther", driver: "Lia Kartika", lat: -6.20, lng: 106.86, speed: 50, heading: 180, status: "moving", alerts: ["Speed Alert"]},
  ]);

  useEffect(() => {
    startTracking();
    return () => stopTracking();
  }, [startTracking, stopTracking]);

  useEffect(() => {
    if (!isConnected) return;
    const interval = setInterval(() => {
      setVehicles(prevVehicles =>
        prevVehicles.map(v =>
          v.status === "moving"
            ? {
                ...v,
                lat: v.lat + (Math.random() - 0.5) * 0.001,
                lng: v.lng + (Math.random() - 0.5) * 0.001,
              }
            : v
        )
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [isConnected]);
  
  const movingCount = vehicles.filter(v => v.status === 'moving').length;
  const stoppedCount = vehicles.filter(v => v.status === 'stopped').length;
  const idleCount = vehicles.filter(v => v.status === 'idle').length;
  const alertsCount = vehicles.reduce((acc, v) => acc + v.alerts.length, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Live GPS Tracking</h2>
          <p className="text-gray-600 mt-2">Real-time vehicle location monitoring</p>
        </div>
        <div className="flex items-center space-x-2">
          <GPSConnectionStatus />
          <Button
            onClick={isConnected ? stopTracking : startTracking}
            variant={isConnected ? "outline" : "default"}
            size="sm"
          >
            {isConnected ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {isConnected ? "Pause" : "Resume"} Tracking
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vehicles Moving</CardTitle>
            <Navigation className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{movingCount}</div>
            <p className="text-xs text-muted-foreground">Currently on route</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vehicles Stopped</CardTitle>
            <Pause className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stoppedCount}</div>
            <p className="text-xs text-muted-foreground">Currently at a stop</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vehicles Idle</CardTitle>
            <Clock className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-600">{idleCount}</div>
            <p className="text-xs text-muted-foreground">Engine on, not moving</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{alertsCount}</div>
            <p className="text-xs text-muted-foreground">Requiring attention</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="map" className="space-y-6">
        <TabsList className="bg-white border">
          <TabsTrigger value="map">Map View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        <TabsContent value="map">
            <Card>
              <CardHeader>
                <CardTitle>Live Vehicle Map</CardTitle>
                <CardDescription>Real-time vehicle positions.</CardDescription>
              </CardHeader>
              <CardContent>
                <LiveMap vehicles={vehicles} />
              </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="list">
             {/* List view content would go here */}
        </TabsContent>
      </Tabs>
    </div>
  );
}