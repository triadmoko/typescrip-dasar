describe("Test Tipe Data Array", function() {
      it("Tipe Data Array", function() {
            const name:String[] = ["triadmoko", "denny","fatrosa"]                            
            const umur:Number[] = [2,4,5,2,3,3,3]
            
            console.log(name);
            console.log(umur);
      })
      it('Read Only Array', () => {
            const ktp:ReadonlyArray<String>=["245345345","2345234534"]
            // ktp[1]="asdfasdf"
            console.log(ktp);
      });
})