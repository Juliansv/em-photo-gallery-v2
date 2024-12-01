import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
	titleColor: string;
	backgroundColor: string;
};

type Action = {
	setTitleColor: (titleColor: State["titleColor"]) => void;
	setBackgroundColor: (backgroundColor: State["backgroundColor"]) => void;
};

const useStore = create<State & Action>()(
	persist(
		(set) => ({
			titleColor: "",
			backgroundColor: "",
			setTitleColor: (titleColor) =>
				set(() => ({ titleColor: titleColor })),
			setBackgroundColor: (backgroundColor) =>
				set(() => ({ backgroundColor: backgroundColor })),
		}),
		{
			name: "store",
			storage: createJSONStorage(() => sessionStorage),

			merge: (persistedState, currentState) => ({
				...currentState,
				...(persistedState as State),
			}),
		}
	)
);

export default useStore;
