const file =require('./Concatenate');
const Concatenate=file.Concatenate;
const ConcatenateArrow=file.ConcatenateArrow;

test('Concatenate' ,()=>{

   expect(Concatenate("A","B")).toBe("");
  expect(Concatenate("AA","BB")).toBe("AB");
    expect(Concatenate("Sneha","trivedi")).toBe("neharivedi");
})

test('Concatenate' , () => {
   expect(ConcatenateArrow("A","B")).toBe("");
 expect(ConcatenateArrow("AA","BB")).toBe("AB");
    expect(ConcatenateArrow("sneha","Trivedi")).toBe("neharivedi");
})
