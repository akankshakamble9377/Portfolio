import { ReactDOM } from "react";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
   <div>
<BrowserRouter>
<Routes>
        <Route path="/" element={<Form />}>
          <Route index element={<NotFound />} />
          <Route path="blogs" element={<NoImage />} />
          <Route path="contact" element={<Loader />} />
          <Route path="*" element={<Item />} />
        </Route>
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
