class IDatabase {
  connect() {
    throw new Error("Method 'connect' must be implemented");
  }
  disconnect() {
    throw new Error("Method 'disconnect' must be implemented");
  }
  async create(model, data) {
    throw new Error("Method 'create' must be implemented");
  }
}

export default IDatabase;
