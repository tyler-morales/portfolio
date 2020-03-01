const instance = new Mark(document.querySelector("section.context"));
        instance.mark(["interactive", "real-time", "modern design"], {
            "element": "mark",
            "className": "highlight"
        });

        const instance2 = new Mark(document.querySelector("section.about"));
        instance2.mark(["purposeful design", "intuitive web experiences", "building interactive", "Chicago meetups",
            "document our progress", "learn the latest technologies", "globally", "Web Development and Design",
            "Columbia College Chicago"
        ], {
            "element": "mark",
            "className": "highlight",
            "acrossElements": true,
            "separateWordSearch": false,
            "accuracy": {
                "value": "exactly",
                "limiters": [",", "."]
            },
        });