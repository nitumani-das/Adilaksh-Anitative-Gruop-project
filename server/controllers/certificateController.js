const Certificate = require('../models/Certificate');
const factory = require('./handlerFactory');

module.exports = {
  getCertificates: factory.getAll(Certificate, { defaultSort: 'displayOrder' }),
  createCertificate: factory.createOne(Certificate),
  updateCertificate: factory.updateOne(Certificate),
  deleteCertificate: factory.deleteOne(Certificate),
};
