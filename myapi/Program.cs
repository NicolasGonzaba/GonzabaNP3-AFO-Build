using myapi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<SayHelloService>();
builder.Services.AddScoped<AdditionService>();
builder.Services.AddScoped<AskingQuestionsService>();
builder.Services.AddScoped<GreaterOrLessService>();
builder.Services.AddScoped<MadLibService>();
builder.Services.AddScoped<OddOrEvenService>();
builder.Services.AddScoped<ReverseAlphaNumService>();
builder.Services.AddScoped<ReverseNumService>();
builder.Services.AddScoped<Magic8BallService>();
builder.Services.AddScoped<RestaurantPickerService>();

builder.Services.AddCors(options =>
{
     options.AddPolicy("DemoDevClient", policy=>{
        policy.WithOrigins("http://localhost:5270", "http://127.0.0.1:5500")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("DemoDevClient");

app.UseAuthorization();

app.MapControllers();

app.Run();
