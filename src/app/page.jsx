import EarningGrowthChart2 from "@/components/dashboard/EarningGrowthChart2";
import EarningGrowthChart from "@/components/dashboard/EarningGrowthChart";
import UserGrowthChart from "@/components/dashboard/UserGrowthChart";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Top Info */}
      <div className="flex flex-col gap-4">
        <div className="text-black">
          <div className="flex justify-evenly gap-4">
            <div className="flex flex-col justify-center items-center bg-[#0bc8bb13] rounded-xl py-4 w-full">
              <div className="flex flex-col gap-5 items-center justify-center ">
                <h3 className="text-2xl font-medium">Total Users</h3>
                <Image
                  src="/images/total-user.png"
                  width={80}
                  height={80}
                  alt="/"
                />
                <p className="text-xl font-medium">852,650</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-[#0bc8bb13] rounded-xl py-4 w-full">
              <div className="flex flex-col gap-5 items-center justify-center">
                <h3 className="text-2xl font-medium">Total Consultant</h3>
                <Image
                  src="/images/total-user.png"
                  width={80}
                  height={80}
                  alt="/"
                />
                <p className="text-xl font-medium">2,650</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-[#0bc8bb13] rounded-xl py-4 w-full">
              <div className="flex flex-col gap-5 items-center justify-center ">
                <h3 className="text-2xl font-medium">Total Earning</h3>
                <Image
                  src="/images/total-user.png"
                  width={80}
                  height={80}
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

        <div>
          <EarningGrowthChart2 />
        </div>
      </div>
    </>
  );
}
