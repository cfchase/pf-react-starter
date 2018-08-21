const mockDocumentList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(d => ({
  id: d,
  title: `Document ${d}`,
  description: `Document ${d} description`,
  properties: {},
  previewText:
    `Document ${d}: Preview text goes here`
}));

export default mockDocumentList;