type TabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = ["Turkish", "Arab", "Pakistani", "Open Now"];

  return (
    <div className="flex gap-2 overflow-x-scroll mb-4">

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-3  rounded-[12px] text-nowrap text-[10px] border transition
            ${
              activeTab === tab
                ? "bg-green-700 text-white"
                : "bg-white text-gray-600"
            }
          `}
        >
          {tab}
        </button>
      ))}

    </div>
  );
}