const Lead = require('../models/Lead');
const asyncHandler = require('../utils/asyncHandler');
const sendResponse = require('../utils/apiResponse');
const sendEmail = require('../utils/sendEmail');
const factory = require('./handlerFactory');

// @desc    Submit a new enquiry (contact form, product enquiry, bulk/export/wholesale)
// @route   POST /api/leads
// @access  Public
const createLead = asyncHandler(async (req, res) => {
  const lead = await Lead.create(req.body);

  // Best-effort notification email; failure to send should not fail the request.
  if (process.env.LEAD_NOTIFY_EMAIL) {
    sendEmail({
      to: process.env.LEAD_NOTIFY_EMAIL,
      subject: `New ${lead.enquiryType} enquiry from ${lead.name}`,
      html: `<p><strong>Name:</strong> ${lead.name}</p>
             <p><strong>Email:</strong> ${lead.email}</p>
             <p><strong>Phone:</strong> ${lead.phone}</p>
             <p><strong>Type:</strong> ${lead.enquiryType}</p>
             <p><strong>Message:</strong> ${lead.message || '-'}</p>`,
    }).catch((err) => console.error('Lead notification email failed:', err.message));
  }

  sendResponse(res, 201, 'Enquiry submitted successfully. Our team will contact you soon.', {
    id: lead._id,
  });
});

module.exports = {
  createLead,
  getLeads: factory.getAll(Lead, { populate: 'product' }),
  getLead: factory.getOne(Lead, { populate: 'product' }),
  updateLead: factory.updateOne(Lead),
  deleteLead: factory.deleteOne(Lead),
};
