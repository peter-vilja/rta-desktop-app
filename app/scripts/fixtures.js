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
          date: '17/11/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '15e',
          date: '06/11/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '40e',
          date: '20/10/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '20e',
          date: '02/10/2013'
        }],
        open: [{
          from: 'Peter Vilja',
          amount: '10e',
          date: '29/12/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '15e',
          date: '15/12/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '40e',
          date: '02/12/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '20e',
          date: '25/11/2013'
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
          date: '09/09/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '15e',
          date: '22/08/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '40e',
          date: '05/08/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '20e',
          date: '23/07/2013'
        }],
        open: [{
          from: 'Patrik Vilja',
          amount: '10e',
          date: '14/12/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '15e',
          date: '10/11/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '40e',
          date: '16/10/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '20e',
          date: '01/10/2013'
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
          date: '09/12/2013'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '15e',
          date: '16/11/2013'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '40e',
          date: '01/11/2013'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '20e',
          date: '15/10/2013'
        }],
        open: [{
          from: 'Hanna-Mari Kinnunen',
          amount: '10e',
          date: '28/12/2013'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '15e',
          date: '16/12/2013'
        }]
      }
		},
    invoices: {
      paid: [
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '10e',
          date: '09/12/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '10e',
          date: '17/11/2013'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '15e',
          date: '16/11/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '15e',
          date: '06/11/2013'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '40e',
          date: '01/11/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '40e',
          date: '20/10/2013'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '20e',
          date: '15/10/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '20e',
          date: '02/10/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '10e',
          date: '09/09/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '15e',
          date: '22/08/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '40e',
          date: '05/08/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '20e',
          date: '23/07/2013'
        }],
      open: [
        {
          from: 'Peter Vilja',
          amount: '10e',
          date: '29/12/2013'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '10e',
          date: '28/12/2013'
        },
        {
          from: 'Hanna-Mari Kinnunen',
          amount: '15e',
          date: '16/12/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '15e',
          date: '15/12/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '10e',
          date: '14/12/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '40e',
          date: '02/12/2013'
        },
        {
          from: 'Peter Vilja',
          amount: '20e',
          date: '25/11/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '15e',
          date: '10/11/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '40e',
          date: '16/10/2013'
        },
        {
          from: 'Patrik Vilja',
          amount: '20e',
          date: '01/10/2013'
        }]
    }
	}
})();