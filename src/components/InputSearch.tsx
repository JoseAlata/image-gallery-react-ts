interface InputSearchProps {
    search: string;
    handleInputSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch = ({ search, handleInputSearch }: InputSearchProps) => {
    return (
        <div>
            <div className="input-search">
                <input
                    className=""
                    type="text"
                    value={search}
                    onChange={handleInputSearch}
                    placeholder="Buscar imagenes"
                />
            </div>
        </div>
    );
};

export default InputSearch;
