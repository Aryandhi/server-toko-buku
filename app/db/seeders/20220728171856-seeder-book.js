'use strict';

module.exports = {
  up: async (queryInterface, Sequelize)=> {
    await queryInterface.bulkInsert(
      'Books', 
      [
        {
          title:'David Bach: Factor Latter',
          author:'David Bach',
          image: '/public/uploads/image 1.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'"Selena" dan "Nebula"',
          author:'Tere Liye',
          image: '/public/uploads/image 2.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'Pelukis Bisu (The Silent patient)',
          author:'Alex Michaelides',
          image: '/public/uploads/image 3.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'Kecamuk Darah (Troubled Blood)',
          author:'Robert Galbraith',
          image: '/public/uploads/image 4.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'Kitab Kawin (Edisi Kitab Baru)',
          author:'Laksmi Pamuntjak',
          image: '/public/uploads/image 5.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'Salvation of a saint',
          author:'Keigo Higashino',
          image: '/public/uploads/image 6.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], 
      {}
    );
  },

  down: async (queryInterface, Sequelize)=> {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
