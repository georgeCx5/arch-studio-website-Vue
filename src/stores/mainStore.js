import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const slideCount = ref(0)
  const bgSlides = [
    {
      id: 1,
      bgs: [
        'bg-[url(@/assets/images/home/mobile/image-hero-paramour.jpg)]',
        'TB:bg-[url(@/assets/images/home/tablet/image-hero-paramour.jpg)]',
        'DT:bg-[url(@/assets/images/home/desktop/image-hero-paramour.jpg)]',
      ],
      header: 'Project Paramour',
      main: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
    },
    {
      id: 2,
      bgs: [
        'bg-[url(@/assets/images/home/mobile/image-hero-seraph.jpg)]',
        'TB:bg-[url(@/assets/images/home/tablet/image-hero-seraph.jpg)]',
        'DT:bg-[url(@/assets/images/home/desktop/image-hero-seraph.jpg)]',
      ],
      header: 'Seraph Station',
      main: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
    },
    {
      id: 3,
      bgs: [
        'bg-[url(@/assets/images/home/mobile/image-hero-federal.jpg)]',
        'TB:bg-[url(@/assets/images/home/tablet/image-hero-federal.jpg)]',
        'DT:bg-[url(@/assets/images/home/desktop/image-hero-federal.jpg)]',
      ],
      header: 'Federal II Tower',
      main: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
    },
    {
      id: 4,
      bgs: [
        'bg-[url(@/assets/images/home/mobile/image-hero-trinity.jpg)]',
        'TB:bg-[url(@/assets/images/home/tablet/image-hero-trinity.jpg)]',
        'DT:bg-[url(@/assets/images/home/desktop/image-hero-trinity.jpg)]',
      ],
      header: 'Trinity Bank Tower',
      main: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
    },
  ]
  const gallery = [
    {
      id: 1,
      bg: [
        'bg-[url(@/assets/images/portfolio/mobile/image-seraph.jpg)]',
        'TB:bg-[url(@/assets/images/portfolio/tablet/image-seraph.jpg)]',
        'DT:bg-[url(@/assets/images/portfolio/desktop/image-seraph.jpg)]',
      ],
      header: 'Seraph Station',
      date: 'September 2019',
    },
    {
      id: 2,
      bg: [
        'bg-[url(@/assets/images/portfolio/mobile/image-eebox.jpg)]',
        'TB:bg-[url(@/assets/images/portfolio/tablet/image-eebox.jpg)]',
        'DT:bg-[url(@/assets/images/portfolio/desktop/image-eebox.jpg)]',
      ],
      header: 'Eebox Building',
      date: 'August 2017',
    },
    {
      id: 3,
      bg: [
        'bg-[url(@/assets/images/portfolio/mobile/image-federal.jpg)]',
        'TB:bg-[url(@/assets/images/portfolio/tablet/image-federal.jpg)]',
        'DT:bg-[url(@/assets/images/portfolio/desktop/image-federal.jpg)]',
      ],
      header: 'Federal II Tower',
      date: 'March 2017',
    },
    {
      id: 4,
      bg: [
        'bg-[url(@/assets/images/portfolio/mobile/image-del-sol.jpg)]',
        'TB:bg-[url(@/assets/images/portfolio/tablet/image-del-sol.jpg)]',
        'DT:bg-[url(@/assets/images/portfolio/desktop/image-del-sol.jpg)]',
      ],
      header: 'Project Del Sol',
      date: 'January 2016',
    },
    {
      id: 5,
      bg: [
        'bg-[url(@/assets/images/portfolio/mobile/image-prototype.jpg)]',
        'TB:bg-[url(@/assets/images/portfolio/tablet/image-prototype.jpg)]',
        'DT:bg-[url(@/assets/images/portfolio/desktop/image-prototype.jpg)]',
      ],
      header: 'Le Prototype',
      date: 'October 2015',
    },
    {
      id: 6,
      bg: [
        'bg-[url(@/assets/images/portfolio/mobile/image-228b.jpg)]',
        'TB:bg-[url(@/assets/images/portfolio/tablet/image-228b.jpg)]',
        'DT:bg-[url(@/assets/images/portfolio/desktop/image-228b.jpg)]',
      ],
      header: '228B Tower',
      date: 'April 2015',
    },
    {
      id: 7,
      bg: [
        'bg-[url(@/assets/images/portfolio/mobile/image-edelweiss.jpg)]',
        'TB:bg-[url(@/assets/images/portfolio/tablet/image-edelweiss.jpg)]',
        'DT:bg-[url(@/assets/images/portfolio/desktop/image-edelweiss.jpg)]',
      ],
      header: 'Grand Edelweiss Hotel',
      date: 'December 2013',
    },
    {
      id: 8,
      bg: [
        'bg-[url(@/assets/images/portfolio/mobile/image-netcry.jpg)]',
        'TB:bg-[url(@/assets/images/portfolio/tablet/image-netcry.jpg)]',
        'DT:bg-[url(@/assets/images/portfolio/desktop/image-netcry.jpg)]',
      ],
      header: 'Netcry Tower',
      date: 'August 2012',
    },
    {
      id: 9,
      bg: [
        'bg-[url(@/assets/images/portfolio/mobile/image-hypers.jpg)]',
        'TB:bg-[url(@/assets/images/portfolio/tablet/image-hypers.jpg)]',
        'DT:bg-[url(@/assets/images/portfolio/desktop/image-hypers.jpg)]',
      ],
      header: 'Hypers',
      date: 'January 2012',
    },
    {
      id: 10,
      bg: [
        'bg-[url(@/assets/images/portfolio/mobile/image-sxiv.jpg)]',
        'TB:bg-[url(@/assets/images/portfolio/tablet/image-sxiv.jpg)]',
        'DT:bg-[url(@/assets/images/portfolio/desktop/image-sxiv.jpg)]',
      ],
      header: 'SXIV Tower',
      date: 'March 2011',
    },
    {
      id: 11,
      bg: [
        'bg-[url(@/assets/images/portfolio/mobile/image-trinity.jpg)]',
        'TB:bg-[url(@/assets/images/portfolio/tablet/image-trinity.jpg)]',
        'DT:bg-[url(@/assets/images/portfolio/desktop/image-trinity.jpg)]',
      ],
      header: 'Trinity Bank Tower',
      date: 'September 2010',
    },
    {
      id: 12,
      bg: [
        'bg-[url(@/assets/images/portfolio/mobile/image-paramour.jpg)]',
        'TB:bg-[url(@/assets/images/portfolio/tablet/image-paramour.jpg)]',
        'DT:bg-[url(@/assets/images/portfolio/desktop/image-paramour.jpg)]',
      ],
      header: 'Project Paramour',
      date: 'February 2008',
    },
  ]
  function joinArr(arr) {
    return arr.join(' ')
  }
  return { slideCount, bgSlides, gallery, joinArr }
})
