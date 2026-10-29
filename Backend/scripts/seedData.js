const mongoose = require("mongoose");
const connection = require("../Database/db");
const Menu = require("../model/menuSchema");
const { favorites, featured, quickbites } = require("../model/LandingSchema");
const catalog = require("../data/SliderData.json");

const upsertRecords = (model, records) => model.bulkWrite(
  records.map(({ title, ...record }) => ({
    updateOne: {
      filter: { title },
      update: { $set: { title, ...record } },
      upsert: true,
    },
  }))
);

const seedCatalog = async ({ onlyEmptyCollections = false } = {}) => {
  await connection;
  const menuItems = [...new Map(
    Object.values(catalog).flat().map((item) => [item.title, item])
  ).values()];

  const collections = [
    [Menu, menuItems],
    [favorites, catalog.favorites],
    [featured, catalog.featured],
    [quickbites, catalog.quickbites],
  ];
  const seeded = [];

  for (const [model, records] of collections) {
    if (onlyEmptyCollections && (await model.countDocuments()) > 0) continue;

    await upsertRecords(model, records);
    seeded.push(`${records.length} ${model.modelName} records`);
  }

  if (seeded.length) {
    console.log(`Seeded ${seeded.join(", ")}.`);
  } else {
    console.log("Catalog collections already contain data; skipping automatic seed.");
  }
};

const seedEmptyCatalogCollections = () => seedCatalog({ onlyEmptyCollections: true });

if (require.main === module) {
  seedCatalog()
    .catch((error) => {
      console.error("Could not seed MongoDB:", error);
      process.exitCode = 1;
    })
    .finally(() => mongoose.disconnect());
}

module.exports = { seedEmptyCatalogCollections };
