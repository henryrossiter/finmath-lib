var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":82,"id":19820,"methods":[{"el":31,"sc":2,"sl":29},{"el":48,"sc":2,"sl":45},{"el":64,"sc":2,"sl":61},{"el":69,"sc":2,"sl":66},{"el":80,"sc":2,"sl":78}],"name":"HybridAssetMonteCarloProduct","sl":24}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_101":{"methods":[{"sl":29},{"sl":66}],"name":"testForeignBond","pass":true,"statements":[{"sl":30},{"sl":68}]},"test_192":{"methods":[{"sl":29},{"sl":66}],"name":"testForeignFRA","pass":true,"statements":[{"sl":30},{"sl":68}]},"test_784":{"methods":[{"sl":29},{"sl":66}],"name":"testForeignCaplet","pass":true,"statements":[{"sl":30},{"sl":68}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [784, 192, 101], [784, 192, 101], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [784, 192, 101], [], [784, 192, 101], [], [], [], [], [], [], [], [], [], [], [], [], [], []]