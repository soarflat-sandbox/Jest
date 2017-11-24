jest.mock('../../src/mock/mockImplementation');

import mockImplementation from '../../src/mock/mockImplementation';

test('mockImplementation', () => {
// mockImplementation is a mock functions
  mockImplementation.mockImplementation(() => 42);
  expect(mockImplementation() + 3).toBe(45);
});