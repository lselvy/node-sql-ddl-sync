var common  = require("../common");
var SQL     = require("../../lib/SQL");

var should  = require("should");

var Dialect = common.fakeDialect;

describe("SQL.CREATE_TABLE", function () {
	it("should return a CREATE TABLE", function (done) {
		SQL.CREATE_TABLE({
			name    : "fake_table",
			columns : [ "first_fake_column", "second_fake_column" ],
			primary : [ "my_primary_key" ]
		}, Dialect).should.equal("CREATE TABLE $$fake_table$$ (first_fake_column, second_fake_column, " +
		                         "PRIMARY KEY ($$my_primary_key$$))");

		return done();
	});
});

describe("SQL.CREATE_TABLE", function () {
	it("should return a CREATE TABLE", function (done) {
		SQL.CREATE_TABLE({
			name    : "fake_table",
			columns : [ "first_fake_column", "second_fake_column" ]
		}, Dialect).should.equal("CREATE TABLE $$fake_table$$ (first_fake_column, second_fake_column)");

		return done();
	});
});

describe("SQL.ALTER_TABLE_ADD_COLUMN", function () {
	it("should return an ALTER TABLE", function (done) {
		SQL.ALTER_TABLE_ADD_COLUMN({
			name    : "fake_table",
			column  : "my_fake_column"
		}, Dialect).should.equal("ALTER TABLE $$fake_table$$ ADD my_fake_column");

		return done();
	});
});

describe("SQL.ALTER_TABLE_ADD_COLUMN", function () {
	it("should return an ALTER TABLE", function (done) {
		SQL.ALTER_TABLE_ADD_COLUMN({
			name    : "fake_table",
			column  : "my_fake_column",
			first   : true
		}, Dialect).should.equal("ALTER TABLE $$fake_table$$ ADD my_fake_column FIRST");

		return done();
	});
});

describe("SQL.ALTER_TABLE_ADD_COLUMN", function () {
	it("should return an ALTER TABLE", function (done) {
		SQL.ALTER_TABLE_ADD_COLUMN({
			name    : "fake_table",
			column  : "my_fake_column",
			after   : "other_column"
		}, Dialect).should.equal("ALTER TABLE $$fake_table$$ ADD my_fake_column AFTER $$other_column$$");

		return done();
	});
});

describe("SQL.ALTER_TABLE_MODIFY_COLUMN", function () {
	it("should return an ALTER TABLE", function (done) {
		SQL.ALTER_TABLE_MODIFY_COLUMN({
			name    : "fake_table",
			column  : "my_fake_column"
		}, Dialect).should.equal("ALTER TABLE $$fake_table$$ MODIFY my_fake_column");

		return done();
	});
});

describe("SQL.ALTER_TABLE_DROP_COLUMN", function () {
	it("should return an ALTER TABLE", function (done) {
		SQL.ALTER_TABLE_DROP_COLUMN({
			name    : "fake_table",
			column  : "my_fake_column"
		}, Dialect).should.equal("ALTER TABLE $$fake_table$$ DROP $$my_fake_column$$");

		return done();
	});
});