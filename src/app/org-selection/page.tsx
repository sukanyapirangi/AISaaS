"use client";

import { useState } from "react";
import { useAuth, useOrganizationList } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function OrgSelectionPage() {
  const router = useRouter();
  const { userId } = useAuth();
  const { userMemberships, isLoaded } = useOrganizationList();
  const [newOrgName, setNewOrgName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateOrg = async () => {
    if (!newOrgName.trim()) return;

    try {
      setLoading(true);
      const response = await fetch("/api/org/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orgName: newOrgName.trim(),
        }),
      });

      if (response.ok) {
        setNewOrgName("");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error creating organization:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectOrg = async (orgId: string) => {
    try {
      const response = await fetch("/api/org/select", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orgId }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error selecting organization:", error);
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Organizations</h1>
          <p className="text-gray-600">
            Select an organization or create a new one
          </p>
        </div>

        {userMemberships?.data && userMemberships.data.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your Organizations</h2>
            <div className="grid gap-4">
              {userMemberships.data.map((membership) => (
                <Card
                  key={membership.organization.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {membership.organization.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Role: {membership.role}
                      </p>
                    </div>
                    <Button
                      onClick={() => handleSelectOrg(membership.organization.id)}
                    >
                      Select
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Create New Organization</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Organization name"
              value={newOrgName}
              onChange={(e) => setNewOrgName(e.target.value)}
              disabled={loading}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleCreateOrg();
              }}
            />
            <Button
              onClick={handleCreateOrg}
              disabled={loading || !newOrgName.trim()}
              className="w-full"
            >
              {loading ? "Creating..." : "Create Organization"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
