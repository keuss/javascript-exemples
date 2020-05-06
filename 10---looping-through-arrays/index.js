var pets = ['cat', 'dog', 'rat'];

for (var i=0; i<pets.length; i++) {
  pets[i] = pets[i] + 's';
}

console.log(pets);

// FLATMAP
var data = [{
		"id": 1,
		"url": "jdbc:h2:mem:testdb",
		"type": 2,
		"app": {
			"id": 1111,
			"name": "TRIG1111",
			"label": "APP1111"
		},
		"jumpFieldList": [{
			"id": 1,
			"sourceName": "SN2",
			"mandatory": true,
			"targetName": "TN2",
			"mappingSource": "MS2",
			"constantValue": "CV2"
		}, {
			"id": 2,
			"sourceName": "SN1",
			"mandatory": true,
			"targetName": "TN1",
			"mappingSource": "MS1",
			"constantValue": "CV1"
		}],
		"jumpContractSourceList": [{
			"jumpContractSourceId": 1,
			"jumpSource": {
				"id": 1,
				"jumpSourceType": null,
				"jumpSourceIdentifier": null
			},
			"jumpCondition": "COND11"
		}, {
			"jumpContractSourceId": 2,
			"jumpSource": {
				"id": 2,
				"jumpSourceType": null,
				"jumpSourceIdentifier": null
			},
			"jumpCondition": "COND22"
		}, {
			"jumpContractSourceId": 3,
			"jumpSource": {
				"id": 3,
				"jumpSourceType": "foo",
				"jumpSourceIdentifier": "mc2"
			},
			"jumpCondition": "COND00"
		}]
	},
	{
		"id": 2,
		"url": "jdbc:h2:mem:testdb",
		"type": 2,
		"app": {
			"id": 2222,
			"name": "TRIG2222",
			"label": "APP2222"
		},
		"jumpFieldList": [{
			"id": 3,
			"sourceName": "SN2",
			"mandatory": true,
			"targetName": "TN2",
			"mappingSource": "MS2",
			"constantValue": "CV2"
		}, {
			"id": 4,
			"sourceName": "SN1",
			"mandatory": true,
			"targetName": "TN1",
			"mappingSource": "MS1",
			"constantValue": "CV1"
		}],
		"jumpContractSourceList": [{
			"jumpContractSourceId": 4,
			"jumpSource": {
				"id": 4,
				"jumpSourceType": null,
				"jumpSourceIdentifier": null
			},
			"jumpCondition": "COND11"
		}, {
			"jumpContractSourceId": 5,
			"jumpSource": {
				"id": 5,
				"jumpSourceType": null,
				"jumpSourceIdentifier": null
			},
			"jumpCondition": "COND22"
		}, {
			"jumpContractSourceId": 6,
			"jumpSource": {
				"id": 6,
				"jumpSourceType": "bar",
				"jumpSourceIdentifier": "mc2"
			},
			"jumpCondition": "COND00"
		}]
	}
];



// var newData = data.flatMap(jc => jc.jumpContractSourceList);
// var newData = data.flatMap(jc => jc.jumpContractSourceList).sort((a, b) => a.jumpContractSourceId - b.jumpContractSourceId);

var newData = data.flatMap(jc => jc.jumpContractSourceList.map(jcs => Object.assign({}, jcs, {app: jc.app})));

console.log('newData', newData);
console.log('newDatalength ', newData.length);
console.log('newData string', JSON.stringify(newData));

/*
newData is like :

[{
	"jumpContractSourceId": 1,
	"jumpSource": {
		"id": 1,
		"jumpSourceType": null,
		"jumpSourceIdentifier": null
	},
	"jumpCondition": "COND11",
	"app": {
		"id": 1111,
		"name": "TRIG1111",
		"label": "APP1111"
	}
}, {
	"jumpContractSourceId": 2,
	"jumpSource": {
		"id": 2,
		"jumpSourceType": null,
		"jumpSourceIdentifier": null
	},
	"jumpCondition": "COND22",
	"app": {
		"id": 1111,
		"name": "TRIG1111",
		"label": "APP1111"
	}
}, {
	"jumpContractSourceId": 3,
	"jumpSource": {
		"id": 3,
		"jumpSourceType": "foo",
		"jumpSourceIdentifier": "mc2"
	},
	"jumpCondition": "COND00",
	"app": {
		"id": 1111,
		"name": "TRIG1111",
		"label": "APP1111"
	}
}, {
	"jumpContractSourceId": 4,
	"jumpSource": {
		"id": 4,
		"jumpSourceType": null,
		"jumpSourceIdentifier": null
	},
	"jumpCondition": "COND11",
	"app": {
		"id": 2222,
		"name": "TRIG2222",
		"label": "APP2222"
	}
}, {
	"jumpContractSourceId": 5,
	"jumpSource": {
		"id": 5,
		"jumpSourceType": null,
		"jumpSourceIdentifier": null
	},
	"jumpCondition": "COND22",
	"app": {
		"id": 2222,
		"name": "TRIG2222",
		"label": "APP2222"
	}
}, {
	"jumpContractSourceId": 6,
	"jumpSource": {
		"id": 6,
		"jumpSourceType": "bar",
		"jumpSourceIdentifier": "mc2"
	},
	"jumpCondition": "COND00",
	"app": {
		"id": 2222,
		"name": "TRIG2222",
		"label": "APP2222"
	}
}]
*/
