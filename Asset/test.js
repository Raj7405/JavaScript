const obj = {
    log: ["example", "test", "hello"],
    get latest() {
      if (this.log.length === 0) return undefined;
      return this.log[this.log.length - 1];
    },
  };
  console.log(obj.latest); // "test"
  