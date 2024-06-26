console.clear();

let tests = [];

function test(name, fn) {
	tests.push({ name, fn });
}

function run() {
	tests.forEach(t => {
		try {
			t.fn();
			console.log('✅', t.name);
		} catch (e) {
			console.log('❌', t.name);
			console.log(e.stack);
		}
	});
}

const files = process.argv.slice(2);

global.test = test;

files.forEach(file => {
	require(file);
})

run();