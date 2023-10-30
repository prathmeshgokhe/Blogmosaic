"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import { Card } from "@nextui-org/card";
import { User } from "@nextui-org/user";
import styles from "@/styles/components/cards.module.scss";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

export const CustomCard = () => (
  <>
    <Card className={styles.main}>
      <div className={styles.image}>
        <Image
          isZoomed
          width={800}
          hei
          radius="none"
          alt="NextUI Fruit Image with Zoom"
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.heading}>
          <p>Lorem Ipsum is simply dummy text of</p>
        </div>
        <div className={styles.profile}>
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
          <p>28 July 2023</p>
        </div>
        <div className={styles.action}>
          <Button radius="none" endContent={<ArrowRight />}>
            Read More
          </Button>
        </div>
      </div>
    </Card>
  </>
);
