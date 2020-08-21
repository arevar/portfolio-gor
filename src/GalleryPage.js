import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import Carousel, { Modal, ModalGateway } from "react-images";
import "./GalleryPage.css";

function GalleryPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpren, setViewerIsOpen] = useState(false);
  // const [onMouseOver, setViewerIsOpen] = useState(false)

  const openLightBox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightBox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="gallery-container">
      <Gallery photos={photos} onClick={openLightBox} />
      <ModalGateway>
        {viewerIsOpren ? (
          <Modal onClose={closeLightBox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default GalleryPage;
