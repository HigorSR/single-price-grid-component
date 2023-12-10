function MonthlySubscription() {
    return (
        <div className="flex flex-col gap-5 bg-Cyan py-7 px-5 md:w-1/2 md:px-8 md:py-12 md:rounded-bl-lg">
            <h1 className="text-white font-bold text-xl">Monthly Subscription</h1>
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                    <h2 className="text-white text-4xl font-bold">$29</h2>
                    <p className="text-Light-Gray font-light">per month</p>
                </div>
                <p className="text-Light-Gray ">Full access for less than $1 a day</p>
            </div>
            <button className="bg-Bright-Yellow text-white rounded-md shadow-lg py-3">Sign Up</button>
        </div>
    );
}

export default MonthlySubscription;