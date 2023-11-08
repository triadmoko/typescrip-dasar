describe('Tipe Data Unio', () => {
      it('should union', () => {
            let sample: Number | String = "dsaf"
            console.log(sample);
            let ty = typeof sample
            console.log(ty);

            sample = 21
            let ty1 = typeof sample
            console.log(sample);
            console.log(ty1);

            sample = "test"
            console.log(sample);
      });
});