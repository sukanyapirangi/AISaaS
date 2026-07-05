import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { orgId } = await req.json();

    if (!orgId) {
      return NextResponse.json(
        { error: "Organization ID is required" },
        { status: 400 }
      );
    }

    // Store the selected organization in a cookie or session
    // For now, we'll just return success
    // In a real app, you'd store this in the database or session

    const response = NextResponse.json(
      { success: true, orgId },
      { status: 200 }
    );

    // Set a cookie for the selected org
    response.cookies.set("selectedOrgId", orgId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return response;
  } catch (error) {
    console.error("Error selecting organization:", error);
    return NextResponse.json(
      { error: "Failed to select organization" },
      { status: 500 }
    );
  }
}
