"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import { Card } from "@nextui-org/card";
import { Spacer } from "@nextui-org/spacer";
import { User } from "@nextui-org/user";

export const CustomCard = () => (
  <>
    <Card className="w-[250px] space-y-5 p-4" radius="2xl">
      <div className="h-30 rounded-lg overflow-hidden">
        <Image
          isZoomed
          width={270}
          alt="NextUI Fruit Image with Zoom"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
      </div>
      <div className="space-y-3">
        <div className="h-fit rounded-lg">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
      </div>
    </Card>
    <Spacer x={4} />
    <Card className=" space-y-5 p-4 h-[300px] w-[250px]" radius="2xl">
      <div className="h-30 rounded-lg overflow-hidden">
        <Image
          isZoomed
          width={270}
          alt="NextUI Fruit Image with Zoom"
          src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
        />
      </div>
      <div className="space-y-3">
        <div className="h-fit rounded-lg">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
      </div>
    </Card>
    <Spacer x={4} />
    <Card className="h-[300px] w-[250px] space-y-5 p-4" radius="2xl">
      <div className="h-30 rounded-lg overflow-hidden">
        <Image
          isZoomed
          width={270}
          alt="NextUI Fruit Image with Zoom"
          src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
      </div>
      <div className="space-y-3">
        <div className="h-fit rounded-lg">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
      </div>
    </Card>
    <Spacer x={4} />
    <Card className="h-[300px] w-[250px] space-y-5 p-4" radius="2xl">
      <div className="h-30 rounded-lg overflow-hidden">
        <Image
          isZoomed
          width={270}
          alt="NextUI Fruit Image with Zoom"
          src="https://images.unsplash.com/photo-1519449063122-df59c9231245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
      </div>
      <div className="space-y-3">
        <div className="h-fit rounded-lg">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
      </div>
    </Card>
  </>
);
