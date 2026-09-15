import React, { useState } from 'react';
import { LivingPalette, GalleryItem } from '../types';
import { GALLERY_DATA } from '../data/clubData';
import {
  Image as ImageIcon,
  Heart,
  Maximize2,
  X,
  Calendar,
} from 'lucide-react';

interface PhotoGalleryProps {
  palette: LivingPalette;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ palette }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [likes, setLikes] = useState<Record<string, boolean>>({});

  const filterTabs = [
    { label: 'All', color: '#00f0ff' },
    { label: 'Hackathons', color: '#ec4899' },
    { label: 'Workshops', color: '#10b981' },
    { label: 'Demos', color: '#00f0ff' },
    { label: 'Socials', color: '#8b5cf6' },
  ];

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredPhotos =
    selectedFilter === 'All'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((p) => p.category === selectedFilter);

  return (
    <div id="gallery-section" className="space-y-8">
      {/* Page Header */}
      <div className="border-b border-neutral-800/80 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Photo Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
            Snapshots from our hack sprints, hardware jams, late-night debug sessions, and annual demo expos.
          </p>
        </div>

        {/* Multi-Color Filter Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {filterTabs.map((tab) => {
            const isSelected = selectedFilter === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setSelectedFilter(tab.label)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-neutral-800 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white bg-[#151821]/80 border-neutral-800'
                }`}
                style={
                  isSelected
                    ? {
                        borderColor: tab.color,
                        boxShadow: `0 0 12px ${tab.color}30`,
                        color: tab.color,
                      }
                    : {}
                }
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: tab.color }}
                />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => {
          const isLiked = likes[photo.id];
          const totalLikes = isLiked ? photo.likes + 1 : photo.likes;

          return (
            <div
              key={photo.id}
              id={`photo-card-${photo.id}`}
              onClick={() => setActivePhoto(photo)}
              className="group rounded-2xl bg-[#151821]/90 border hover:border-neutral-600 transition-all overflow-hidden flex flex-col cursor-pointer shadow-xl backdrop-blur-sm"
              style={{
                borderColor: `${photo.colorAccent}35`,
                boxShadow: `0 4px 20px -10px ${photo.colorAccent}25`,
              }}
            >
              {/* Image Container with Dynamic Gradient Overlay */}
              <div className="relative h-56 overflow-hidden bg-black">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151821] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge with Color Accent */}
                <div
                  className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border text-[10px] font-mono font-bold"
                  style={{
                    borderColor: `${photo.colorAccent}60`,
                    color: photo.colorAccent,
                  }}
                >
                  {photo.category}
                </div>

                {/* Quick Enlarge Cue */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-xl bg-black/75 text-white text-xs flex items-center gap-1 backdrop-blur-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Expand</span>
                </div>
              </div>

              {/* Photo Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-neutral-500" />
                    <span>{photo.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-neutral-100 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                  <button
                    onClick={(e) => toggleLike(e, photo.id)}
                    className={`flex items-center gap-1.5 text-xs font-mono transition-colors ${
                      isLiked ? 'text-rose-400' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 transition-transform active:scale-125 ${
                        isLiked ? 'fill-rose-500 text-rose-500' : ''
                      }`}
                    />
                    <span>{totalLikes} likes</span>
                  </button>

                  <span
                    className="text-[11px] font-mono flex items-center gap-1"
                    style={{ color: photo.colorAccent }}
                  >
                    View Photo ↗
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          id="photo-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#151821] border rounded-3xl overflow-hidden shadow-2xl relative"
            style={{ borderColor: activePhoto.colorAccent }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-neutral-700 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Expanded Image */}
            <div className="bg-black max-h-[65vh] flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>

            {/* Modal Info */}
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border"
                    style={{
                      backgroundColor: `${activePhoto.colorAccent}15`,
                      borderColor: `${activePhoto.colorAccent}50`,
                      color: activePhoto.colorAccent,
                    }}
                  >
                    {activePhoto.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">{activePhoto.date}</span>
                </div>
                <button
                  onClick={(e) => toggleLike(e, activePhoto.id)}
                  className="flex items-center gap-1.5 text-xs text-neutral-200 hover:text-white font-mono"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likes[activePhoto.id] ? 'fill-rose-500 text-rose-500' : ''
                    }`}
                  />
                  <span>
                    {likes[activePhoto.id] ? activePhoto.likes + 1 : activePhoto.likes}
                  </span>
                </button>
              </div>

              <h2 className="text-xl font-bold text-white">{activePhoto.title}</h2>
              <p className="text-sm text-neutral-300 leading-relaxed">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
