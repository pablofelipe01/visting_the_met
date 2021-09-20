import React from 'react';
import Card from 'react-bootstrap/Card';



const Gallery = ({ galleryImages }) => {
  if (!galleryImages) return null;
  return (
   
        
          <Card key={galleryImages.id}>
            {galleryImages.primaryImage && (
              <Card.Img
                variant="top"
                src={galleryImages.primaryImage ? galleryImages.primaryImage: ''}
                alt={galleryImages.title}
              />
            )}
            <Card.Body>
              {galleryImages.primaryImage ? (
                ''
              ) : (
                <Card.Title>No Image Available</Card.Title>
              )}
              <Card.Text className="text-muted">{galleryImages.title}</Card.Text>
              <Card.Text className="text-monospace">{galleryImages.medium}</Card.Text>
              <Card.Text className="text-muted">{galleryImages.period}</Card.Text>
              <Card.Text className="font-weight-bold">{galleryImages.artistDisplayName}</Card.Text>
              <Card.Text className="text-muted">{galleryImages.artistDisplayBio}</Card.Text>
              <p>
              <a href={galleryImages.artistWikidata_URL} target="_blank">Artist Info</a>
              </p>
              <Card.Text className="text-muted">MET Department: {galleryImages.department}</Card.Text>
              <p>
              <a href={galleryImages.objectURL} target="_blank">More Info</a>
              </p>
            
            </Card.Body>
          </Card>
        );
  
  
};

export default Gallery;