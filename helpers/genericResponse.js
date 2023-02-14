const sendResponse = async (req, res) => {
  const response = {
    statusCode: 200,
    data: res.data || {},
    message: 'Success'
  };
  return res.status(200).json(response);
};

module.exports = sendResponse;
