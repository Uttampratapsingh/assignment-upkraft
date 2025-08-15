const ReferCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md backdrop-blur-lg overflow-hidden ml-2">
      {/* Image on top */}
      <div className="w-full flex justify-center" >
        <img 
          src="/avatar.jpg" 
          alt="Refer and Earn" 
          className="h-[178px] object-cover"
        />
      </div>

      {/* Purple card section */}
      <div className="bg-gradient-to-t from-violet-800 to-blue-700 text-center rounded-2xl text-white pt-2">
        <h3 className="text-xl font-bold mb-1">Refer and Earn</h3>
        <p className="text-white/90 text-sm mb-2">
          Invite friends and earn exclusive rewards <br /> for every successful referral!
        </p>
        <button className="bg-[#ffcc4d] text-black font-medium px-6 py-2 rounded-md transition hover:bg-[#e6b83f] mb-4">
          Refer Now →
        </button>
      </div>
    </div>
  );
}

export default ReferCard;
