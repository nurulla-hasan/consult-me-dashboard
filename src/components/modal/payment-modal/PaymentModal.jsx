import Image from "next/image";


const PaymentModal = ({ showModal, selectedUser, handleReject, handleAccept }) => {
    return (
        <>
            {showModal && selectedUser && (
                <div className="fixed h-[100vh] inset-0 flex justify-center items-center bg-black/50 bg-opacity-50 z-50">
                    <div className="bg-white rounded-xl min-w-lg  p-4">
                        <div className="bg-[#00a89dbc] rounded-xl h-52 flex gap-3 justify-center items-center flex-col mb-4">
                            <Image src={selectedUser?.avatar} width={80} height={80} alt="avatar" className="rounded-full" />
                            <div className="flex flex-col justify-center items-center text-white">
                                <h1 className="font-medium text-2xl">{selectedUser.name}</h1>
                                <p>Consultant</p>
                            </div>
                        </div>
                        <div className="mb-10 px-6">
                            <div className="space-y-4 *:space-y-1">
                                <div>
                                    <h3 className="text-md font-medium">Name On Card</h3>
                                    <p className="text-xs">{selectedUser.name}</p>
                                </div>
                                <div>
                                    <h3 className="text-md font-medium">Email</h3>
                                    <p className="text-xs">{selectedUser.email}</p>
                                </div>
                                <div>
                                    <h3 className="text-md font-medium">Payment Method</h3>
                                    <p className="text-xs">Stripe</p>
                                </div>
                                <div>
                                    <h3 className="text-md font-medium">Card Number</h3>
                                    <p className="text-xs">5485 6548 1256</p>
                                </div>
                                <div>
                                    <h3 className="text-md font-medium">Security Code</h3>
                                    <p className="text-xs">1236</p>
                                </div>
                                <div>
                                    <h3 className="text-md font-medium">Amount</h3>
                                    <p className="text-xs">$200</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-between gap-8 px-6">
                            <button
                                onClick={handleReject}
                                className="border text-black py-2 w-full rounded-md cursor-pointer"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="bg-teal-600 text-white py-2 w-full rounded-md cursor-pointer"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PaymentModal;