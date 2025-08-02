import { useButtonStore2 } from '../utils/useButtonStore';

export const Credits = (() => {
    const setButton2Clicked = useButtonStore2((state) => state.setButton2Clicked);

    return(
        <section className="absolute top-18 left-1/2 transform -translate-x-1/2 z-10 bg-gray-800 text-white rounded-2xl p-6 shadow-lg max-w-3xl mx-auto my-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Credits</h2>
            <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam saepe debitis dolore, praesentium obcaecati rerum dolorem in sed labore vitae velit neque cum, cupiditate laboriosam molestias adipisci voluptatum assumenda.
            </p>
            <button
            onClick={() => setButton2Clicked(false)}
            className="px-6 py-3 text-xl bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 rounded-xl text-white shadow-lg"
            >
            back
            </button>
        </section>
    );
});

            