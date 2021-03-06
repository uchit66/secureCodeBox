const { scan } = require('../helpers')

test(
    "ncrack should find 1 credential in vulnerable ssh service",
    async () => {
        const { categories, severities, count } = await scan(
            "ncrack-dummy-ssh",
            "ncrack",
            ["-v","--user=root,admin", "--pass=THEPASSWORDYOUCREATED,12345", "ssh://dummy-ssh.demo-apps.svc"],
            90
        );

        expect(count).toBe(1);
        expect(categories).toEqual(
        {
            "Discovered Credentials": 1,
        }
        );
        expect(severities).toEqual(
        {
            "high": 1,
        }
        );
    },
    3 * 60 * 1000
);

