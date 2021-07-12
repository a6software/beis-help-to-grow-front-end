export const mockReq = () => ({
  session: {},
});

export const mockRes = () => ({
  locals: {},
  redirect: jest.fn(),
  render: jest.fn(),
  sendStatus: jest.fn(),
  status: jest.fn(),
});

export default {
  mockReq,
  mockRes,
};
