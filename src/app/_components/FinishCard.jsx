export const FinishCard = () => {
  return (
    <div className="p-[32px] bg-[#FFFFFF] rounded-[8px] m-[40px]">
      <div className="flex flex-col w-full pb-[28px]">
        <img src="/images/logo.png" alt="logo" className="size-fit" />
        <h2 className="text-2xl font-semibold">You're All Set 🔥</h2>
        <p className="text-[#8E8E8E] text-lg">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
