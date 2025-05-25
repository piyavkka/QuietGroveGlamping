export type House = {
    id: number;
    title: string;
    description: string;
    timeFirst: string;
    timeSecond: string;
    people: number;
    cost: number;
    images: string[];
};

export interface SaunaSectionProps {
    saunaSlotsData: { date: Date; slots: string[] }[];
    selectedSaunaSlots: Record<string, Set<string>>;
    toggleSlot: (dateKey: string, slot: string) => void;
    addTub: boolean;
    setAddTub: (value: boolean) => void;
    selectedFillId: number;
    setSelectedFillId: (id: number) => void;
}