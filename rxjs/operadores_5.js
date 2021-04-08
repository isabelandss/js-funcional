const { of, Observable } = require('rxjs')

const terminadoCom = (parteFinal) => (source) =>
  new Observable(subscriber => {
    source.subscribe({
      next(value = '') {
        if(Array.isArray(value)) {
          const filtered = value.filter(el => el.endsWith(parteFinal))
          subscriber.next(filtered)
        } else {
          value.endsWith(parteFinal) && subscriber.next(value)
        }
      },
      complete() {
        subscriber.complete()
      }
    })
  })

// of(['Ana Silva', 'Pedro Rocha', 'Isabela Silva'])
of('Ana Silva', 'Pedro Rocha', 'Isabela Silva')
  .pipe(terminadoCom('Silva'))
  .subscribe(console.log)