import { useButtonStore1, useButtonStore2 } from "../utils/useButtonStore";


export const Welcome = (() => {
  const setButton1Clicked = useButtonStore1((state) => state.setButton1Clicked);
  const setButton2Clicked = useButtonStore2((state) => state.setButton2Clicked);

    return(
        <div className="absolute top-18 left-1/2 transform -translate-x-1/2 z-10 text-white flex flex-col items-center space-y-6">
        <h1 className="text-5xl font-bold">Augmented reality</h1>
        <div className="flex gap-6">
            <button
            onClick={() => setButton1Clicked(true)}
            className="px-6 py-3 text-xl bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 rounded-xl text-white shadow-lg"
            >
            Scan me
            </button>
            <button
            onClick={() => setButton2Clicked(true)}
            className="px-6 py-3 text-xl bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 rounded-xl text-white shadow-lg"
            >
            Credits
            </button>
        </div>
    </div>

    );
});