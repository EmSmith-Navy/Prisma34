const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const employees = [
	{ name: 'Alice' },
	{ name: 'Bob' },
	{ name: 'Charlie' },
	{ name: 'David' },
	{ name: 'Eve' },
	{ name: 'Frank' },
	{ name: 'Grace' },
	{ name: 'Heidi' },
	{ name: 'Ivan' },
	{ name: 'Judy' },
  ];

  for (const employee of employees) {
	await prisma.employee.create({ data: employee });
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
	await prisma.$disconnect();
  });