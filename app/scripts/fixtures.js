(function() {
	users = {
		peter: {
      id: 'peter',
			name: 'Peter Vilja',
			phone: '050 5020342',
			address: 'Helsinginkatu 3 A',
			email: 'peter.vilja@aalto.fi',
      ebank: 987654321,
      invoices: {
        paid: [{
          from: 'Peter Vilja',
          amount: '10e',
          date: '17/11/2013',
          invoiceId: '10031001'
        },
        {
          from: 'Peter Vilja',
          amount: '15e',
          date: '06/11/2013',
          invoiceId: '10031002'
        },
        {
          from: 'Peter Vilja',
          amount: '40e',
          date: '20/10/2013',
          invoiceId: '10031003'
        },
        {
          from: 'Peter Vilja',
          amount: '20e',
          date: '02/10/2013',
          invoiceId: '10031004'
        }],
        open: [{
          from: 'Peter Vilja',
          amount: '10e',
          date: '29/12/2013',
          invoiceId: '10031005'
        },
        {
          from: 'Peter Vilja',
          amount: '15e',
          date: '15/12/2013',
          invoiceId: '10031006'
        },
        {
          from: 'Peter Vilja',
          amount: '40e',
          date: '02/12/2013',
          invoiceId: '10031007'
        },
        {
          from: 'Peter Vilja',
          amount: '20e',
          date: '25/11/2013',
          invoiceId: '10031008'
        }]
      }
		},
		patrik: {
      id: 'patrik',
			name: 'Patrik Vilja',
			phone: '050 5020342',
			address: 'Koivuranta 2',
			email: 'patrik.vilja@aalto.fi',
      ebank: 543216789,
      invoices:  {
        paid: [{
          from: 'Patrik Vilja',
          amount: '10e',
          date: '09/09/2013',
          invoiceId: '10031009'
        },
        {
          from: 'Patrik Vilja',
          amount: '15e',
          date: '22/08/2013',
          invoiceId: '10031010'
        },
        {
          from: 'Patrik Vilja',
          amount: '40e',
          date: '05/08/2013',
          invoiceId: '10031011'
        },
        {
          from: 'Patrik Vilja',
          amount: '20e',
          date: '23/07/2013',
          invoiceId: '10031012'
        }],
        open: [{
          from: 'Patrik Vilja',
          amount: '10e',
          date: '14/12/2013',
          invoiceId: '10031013'
        },
        {
          from: 'Patrik Vilja',
          amount: '15e',
          date: '10/11/2013',
          invoiceId: '10031014'
        },
        {
          from: 'Patrik Vilja',
          amount: '40e',
          date: '16/10/2013',
          invoiceId: '10031015'
        },
        {
          from: 'Patrik Vilja',
          amount: '20e',
          date: '01/10/2013',
          invoiceId: '10031016'
        }]
      }
		},
		hannamari: {
      id: 'hannis',
			name: 'Hanna-Mari Kinnunen',
			phone: '050 5020342',
			address: 'Koskelantie 5',
			email: 'hannamari.kinnunen@aalto.fi',
      ebank: 567891234,
      invoices: {
        paid: [{
          from: 'Hanna-Mari Kinnunen',
          amount: '10e',
          date: '09/12/2013',
          invoiceId: '10031017'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '15e',
          date: '16/11/2013',
          invoiceId: '10031018'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '40e',
          date: '01/11/2013',
          invoiceId: '10031019'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '20e',
          date: '15/10/2013',
          invoiceId: '10031020'
        }],
        open: [{
          from: 'Hanna-Mari Kinnunen',
          amount: '10e',
          date: '28/12/2013',
          invoiceId: '10031021'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '15e',
          date: '16/12/2013',
          invoiceId: '10031022'
        }]
      }
		},
    invoices: {
      paid: [
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '10e',
          date: '09/12/2013',
          invoiceId: '10031023'
        },
        {
          from: 'Peter Vilja',
          amount: '10e',
          date: '17/11/2013',
          invoiceId: '10031024'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '15e',
          date: '16/11/2013',
          invoiceId: '10031025'
        },
        {
          from: 'Peter Vilja',
          amount: '15e',
          date: '06/11/2013',
          invoiceId: '10031026'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '40e',
          date: '01/11/2013',
          invoiceId: '10031027'
        },
        {
          from: 'Peter Vilja',
          amount: '40e',
          date: '20/10/2013',
          invoiceId: '10031028'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '20e',
          date: '15/10/2013',
          invoiceId: '10031029'
        },
        {
          from: 'Peter Vilja',
          amount: '20e',
          date: '02/10/2013',
          invoiceId: '10031030'
        },
        {
          from: 'Patrik Vilja',
          amount: '10e',
          date: '09/09/2013',
          invoiceId: '10031031'
        },
        {
          from: 'Patrik Vilja',
          amount: '15e',
          date: '22/08/2013',
          invoiceId: '10031032'
        },
        {
          from: 'Patrik Vilja',
          amount: '40e',
          date: '05/08/2013',
          invoiceId: '10031033'
        },
        {
          from: 'Patrik Vilja',
          amount: '20e',
          date: '23/07/2013',
          invoiceId: '10031034'
        }],
      open: [
        {
          from: 'Peter Vilja',
          amount: '10e',
          date: '29/12/2013',
          invoiceId: '10031035'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '10e',
          date: '28/12/2013',
          invoiceId: '10031036'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '15e',
          date: '16/12/2013',
          invoiceId: '10031037'
        },
        {
          from: 'Peter Vilja',
          amount: '15e',
          date: '15/12/2013',
          invoiceId: '10031038'
        },
        {
          from: 'Patrik Vilja',
          amount: '10e',
          date: '14/12/2013',
          invoiceId: '10031039'
        },
        {
          from: 'Peter Vilja',
          amount: '40e',
          date: '02/12/2013',
          invoiceId: '10031040'
        },
        {
          from: 'Peter Vilja',
          amount: '20e',
          date: '25/11/2013',
          invoiceId: '10031041'
        },
        {
          from: 'Patrik Vilja',
          amount: '15e',
          date: '10/11/2013',
          invoiceId: '10031042'
        },
        {
          from: 'Patrik Vilja',
          amount: '40e',
          date: '16/10/2013',
          invoiceId: '10031043'
        },
        {
          from: 'Patrik Vilja',
          amount: '20e',
          date: '01/10/2013',
          invoiceId: '10031044'
        }],
      sent: [
        {
          from: 'Peter Vilja',
          amount: '10e',
          date: '29/12/2013',
          invoiceId: '10031035'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '10e',
          date: '28/12/2013',
          invoiceId: '10031036'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '15e',
          date: '16/12/2013',
          invoiceId: '10031037'
        },
        {
          from: 'Peter Vilja',
          amount: '15e',
          date: '15/12/2013',
          invoiceId: '10031038'
        },
        {
          from: 'Patrik Vilja',
          amount: '10e',
          date: '14/12/2013',
          invoiceId: '10031039'
        },
        {
          from: 'Peter Vilja',
          amount: '40e',
          date: '02/12/2013',
          invoiceId: '10031040'
        },
        {
          from: 'Peter Vilja',
          amount: '20e',
          date: '25/11/2013',
          invoiceId: '10031041'
        },
        {
          from: 'Patrik Vilja',
          amount: '15e',
          date: '10/11/2013',
          invoiceId: '10031042'
        },
        {
          from: 'Patrik Vilja',
          amount: '40e',
          date: '16/10/2013',
          invoiceId: '10031043'
        },
        {
          from: 'Patrik Vilja',
          amount: '20e',
          date: '01/10/2013',
          invoiceId: '10031044'
        }]
    }
	}
})();