'use strict';

const fs = require('fs');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const filePath = path.join(__dirname, '..', 'compounds.json');
    const { compounds } = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    const compoundData = compounds.map(compound => ({
      name: compound.compoundName,
      image: compound.compoundImage,
      description: compound.compoundDescription,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Compounds', compoundData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Compounds', null, {});
  }
};