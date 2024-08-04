import React, { useState, useEffect } from 'react';

import { Total, Image } from '../types/index.ts'; // Import the Image type
import ImageCard from './ImageCard';
import Pagination from './Pagination.tsx';
import InputSearch from './InputSearch.tsx';
const ImageGallery = () => {
    const [images, setImages] = useState<Image[]>([]); // Use the Image type
    const [isLoaded, setIsLoaded] = useState(false);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetchGallery();
    }, [search, page]);

    const fetchGallery = async () => {
        try {
            const apiID = import.meta.env.VITE_API_ID;
            const searchTerm = search.trim() || 'random'; // Establece un valor predeterminado si `search` está vacío
            const response = await fetch(
                `https://api.unsplash.com/search/photos?page=${page}&query=${searchTerm}&client_id=${apiID}`
            );
            setIsLoaded(true);
            console.log('response', response);
            const data: Total = await response.json();
            console.log('data:', data.results);

            setImages(data.results);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.log(`error:`, error);
        }
    };

    const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearch(e.target.value);
        setPage(1);
    };

    const handlePageClick = (pageNumber: number) => {
        setPage(pageNumber);
    };

    return (
        <>
            <InputSearch
                search={search}
                handleInputSearch={handleInputSearch}
            />
            <Pagination
                page={page}
                totalPages={totalPages}
                handlePageClick={handlePageClick}
            />

            {!isLoaded ? (
                <p>cargando...</p>
            ) : (
                <div>
                    <div className="gallery">
                        {images.map((image) => (
                            <ImageCard key={image.id} image={image} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageGallery;
