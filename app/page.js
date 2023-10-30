import { CustomCard } from "@/components/CustomCards";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import MusicCard from "@/components/MusicCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] h-screen gap-[20px]">
      <div className="flex">
        <CustomCard />
      </div>
      <div className=" w-[68.3%] h-[250px] flex justify-center items-center rounded-2xl gap-[20px]">
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1630713815198-17ff8a8a7103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              width={145}
            />
          </CardBody>
        </Card>
        {/* <div className="flex justify-center items-center"> */}
        <MusicCard />
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1506157999258-a35364384ce9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              width={145}
            />
          </CardBody>
        </Card>
        {/* </div> */}
      </div>
    </div>
  );
}
