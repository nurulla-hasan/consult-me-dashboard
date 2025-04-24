import EarningGrowthChart from "@/components/dashboard/EarningGrowthChart";
import UserGrowthChart from "@/components/dashboard/UserGrowthChart";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Top Info */}
      <div className="p-4 flex flex-col gap-4">
        <div className="text-black">
          <div className="flex justify-evenly p-">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col gap-3 items-center justify-center bg-[#0bc8bb13] rounded-xl py-2 w-xs">
                <h3 className="text-lg font-medium">Total Users</h3>
                <Image
                  src="/images/total-user.png"
                  width={60}
                  height={60}
                  alt="/"
                />
                <p className="text-xl font-medium">852,650</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col gap-3 items-center justify-center bg-[#0bc8bb13] rounded-xl py-2 w-xs">
                <h3 className="text-lg font-medium">Total Consultant</h3>
                <Image
                  src="/images/total-user.png"
                  width={60}
                  height={60}
                  alt="/"
                />
                <p className="text-xl font-medium">2,650</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col gap-3 items-center justify-center bg-[#0bc8bb13] rounded-xl py-2 w-xs">
                <h3 className="text-lg font-medium">Total Earning</h3>
                <Image
                  src="/images/total-user.png"
                  width={60}
                  height={60}
                  alt="/"
                />
                <p className="text-xl font-medium">$5,650</p>
              </div>
            </div>

          </div>
        </div>

        {/* Middle Info */}
        <div className="flex gap-5">
          <div className="flex-1/2">
            <EarningGrowthChart />
          </div>
          <div className="flex-1/2">
            <UserGrowthChart />
          </div>
        </div>



        <div className="">

        </div>
      </div>
    </>
  );
}
