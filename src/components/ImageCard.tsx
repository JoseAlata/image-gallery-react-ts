import { Image } from '../types/index.ts';

interface ImageCardProps {
    image: Image;
}

const ImageCard = ({ image }: ImageCardProps) => {
    const modifiedSlug = (str: string, id: string) => {
        const deleteID = str.replace(`-${id}`, '');
        const replaceHyphen = deleteID.replace(/-/g, ' ');
        return replaceHyphen;
    };

    return (
        <div className="image-card">
            <div className="image-card__imagen">
                <img
                    className="image-card__imagen-content"
                    src={image.urls.regular}
                    alt={image.alt_description}
                    title={modifiedSlug(image.alternative_slugs.es, image.id)}
                />
            </div>
            <div
                title={modifiedSlug(image.alternative_slugs.es, image.id)}
                className="image-card__description"
            >
                <div className="image-card__user">
                    <div className="image-card__user-img">
                        <img
                            src={image.user.profile_image.small}
                            alt={image.user.name}
                        />
                    </div>
                    <p>{image.user.name} </p>
                </div>
                <div className="image-card__actions">
                    <div className="image-card__favorite">
                        <span>{image.likes}</span>
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <a
                        href={image.links.download}
                        download
                        rel="nofollow"
                        target="_blank"
                        className="image-card__download"
                    >
                        <span className="material-symbols-outlined">
                            download
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
