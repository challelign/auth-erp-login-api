import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'; //shadcn ui folder
const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];
const formSchema = z.object({
  adImage: z
    .any()
    .refine((files) => {
       return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

export function MyForm() {
  const [selectedImage, setSelectedImage] = (useState < File) | (null > []);
  const form =
    useForm <
    z.infer <
    typeof formSchema >>
      {
        resolver: zodResolver(formSchema),
        defaultValues: {
          adImage: undefined,
        },
      };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={cn("flex md:flex-row w-[100%] gap-4 flex-col")}>
          <div className="flex  w-[100%] gap-4 flex-col ">
            <FormLabel>your form title</FormLabel>
            <div
              className={`flex w-[100%] gap-4 p-4 rounded border border-neutral-200 flex-col items-center md:flex-row md:justify-between md:items-center`}
            >
              <div
                className={`flex  md:flex-[1] h-[fit-content] md:p-4 md:justify-between md:flex-row 
                        
            `}
              >
                {selectedImage ? (
                  <div className="md:max-w-[200px]">
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                    />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-between">
                    <div className="p-3 bg-slate-200  justify-center items-center flex">
                      <BsImages size={56} />
                    </div>
                    
                  </div>
                )}
              </div>
              <FormField
                control={form.control}
                name="adImage"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Button size="lg" type="button">
                        <input
                          type="file"
                          className="hidden"
                          id="fileInput"
                          onBlur={field.onBlur}
                          name={field.name}
                          onChange={(e) => {
                            field.onChange(e.target.files);
                            setSelectedImage(e.target.files?.[0] || null);
                          }}
                          ref={field.ref}
                        />
                        <label
                          htmlFor="fileInput"
                          className="bg-blue-500 hover:bg-blue-600 text-neutral-90  rounded-md cursor-pointer inline-flex items-center"
                        >
                          <BsPaperclip />
                          <span className="whitespace-nowrap">
                            choose your image
                          </span>
                        </label>
                      </Button>
                    </FormControl>
                    {/* <FormDescription>This is your public display email.</FormDescription> */}

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className={cn("flex w-[100%] gap-4 justify-end")}>
          <div className="space-y-2">
            <Button className="gap-1 py-4 px-4" type="submit">
              <span>SUBMIT</span>
              <IoSendOutline />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}