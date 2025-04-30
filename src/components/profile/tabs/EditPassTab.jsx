

const EditPassTab = ({activeTab, handleSubmit, onSubmitPassword, register}) => {
    return (
        <>
            {activeTab === 'password' && (
                <form onSubmit={handleSubmit(onSubmitPassword)} className="space-y-4">
                    <h3 className='text-2xl font-medium text-center'>
                        Change Password
                    </h3>

                    <div>
                        <label className="block mb-1 font-medium">Current Password</label>
                        <input
                            type="password"
                            {...register('currentPassword')}
                            className="w-full border border-teal-400 rounded-md p-2 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">New Password</label>
                        <input
                            type="password"
                            {...register('newPassword')}
                            className="w-full border border-teal-400 rounded-md p-2 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Confirm New Password</label>
                        <input
                            type="password"
                            {...register('confirmPassword')}
                            className="w-full border border-teal-400 rounded-md p-2 outline-none"
                        />
                    </div>

                    <div className='w-full text-center'>
                        <button type="submit" className="mt-4 px-8 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md cursor-pointer">
                            Save Changes
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

export default EditPassTab;