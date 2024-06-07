<template>
  <div
    class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
  >
    <div class="d-flex align-items-center flex-wrap text-nowrap">
      <button
        type="button"
        class="btn btn-outline-info btn-icon-text mr-2 d-none d-md-block"
      >
        <i class="btn-icon-prepend" data-feather="download"></i>
        Import
      </button>
      <button
        type="button"
        class="btn btn-outline-primary btn-icon-text mr-2 mb-2 mb-md-0"
      >
        <i class="btn-icon-prepend" data-feather="printer"></i>
        Print
      </button>
      <button type="button" class="btn btn-primary btn-icon-text mb-2 mb-md-0">
        <i class="btn-icon-prepend" data-feather="download-cloud"></i>
        Download Report
      </button>
    </div>
  </div>

  <!-- Sale & Revenue Start -->
  <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
      <div class="col-sm-6 col-xl-3">
        <div
          class="bg-light rounded d-flex align-items-center justify-content-between p-4"
        >
          <i class="fa fa-chart-line fa-3x text-primary"></i>
          <div class="ms-3">
            <p class="mb-2">Today Sale</p>
            <h6 class="mb-0">$1234</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3">
        <div
          class="bg-light rounded d-flex align-items-center justify-content-between p-4"
        >
          <i class="fa fa-chart-bar fa-3x text-primary"></i>
          <div class="ms-3">
            <p class="mb-2">Total Sale</p>
            <h6 class="mb-0">$1234</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3">
        <div
          class="bg-light rounded d-flex align-items-center justify-content-between p-4"
        >
          <i class="fa fa-chart-area fa-3x text-primary"></i>
          <div class="ms-3">
            <p class="mb-2">Today Revenue</p>
            <h6 class="mb-0">$1234</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3">
        <div
          class="bg-light rounded d-flex align-items-center justify-content-between p-4"
        >
          <i class="fa fa-chart-pie fa-3x text-primary"></i>
          <div class="ms-3">
            <p class="mb-2">Total Revenue</p>
            <h6 class="mb-0">$1234</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Sale & Revenue End -->

  <!-- Sales Chart Start -->
  <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
      <div class="col-sm-12 col-xl-6">
        <div class="bg-light text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Worldwide Sales</h6>
            <a href="">Show All</a>
          </div>
          <canvas id="worldwide-sales"></canvas>
        </div>
      </div>
      <div class="col-sm-12 col-xl-6">
        <div class="bg-light text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Salse & Revenue</h6>
            <a href="">Show All</a>
          </div>
          <canvas id="salse-revenue"></canvas>
        </div>
      </div>
    </div>
  </div>
  <!-- Sales Chart End -->

  <!-- Recent Sales Start -->
  <div class="container-fluid pt-4 px-4">
    <div class="bg-light text-center rounded p-4">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h6 class="mb-0">Recent Salse</h6>
        <a href="">Show All</a>
      </div>
      <div class="table-responsive">
        <table
          class="table text-start align-middle table-bordered table-hover mb-0"
        >
          <thead>
            <tr class="text-dark">
              <th scope="col">
                <input class="form-check-input" type="checkbox" />
              </th>
              <th scope="col">Date</th>
              <th scope="col">Invoice</th>
              <th scope="col">Customer</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input class="form-check-input" type="checkbox" /></td>
              <td>01 Jan 2045</td>
              <td>INV-0123</td>
              <td>Jhon Doe</td>
              <td>$123</td>
              <td>Paid</td>
              <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
            </tr>
            <tr>
              <td><input class="form-check-input" type="checkbox" /></td>
              <td>01 Jan 2045</td>
              <td>INV-0123</td>
              <td>Jhon Doe</td>
              <td>$123</td>
              <td>Paid</td>
              <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
            </tr>
            <tr>
              <td><input class="form-check-input" type="checkbox" /></td>
              <td>01 Jan 2045</td>
              <td>INV-0123</td>
              <td>Jhon Doe</td>
              <td>$123</td>
              <td>Paid</td>
              <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
            </tr>
            <tr>
              <td><input class="form-check-input" type="checkbox" /></td>
              <td>01 Jan 2045</td>
              <td>INV-0123</td>
              <td>Jhon Doe</td>
              <td>$123</td>
              <td>Paid</td>
              <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
            </tr>
            <tr>
              <td><input class="form-check-input" type="checkbox" /></td>
              <td>01 Jan 2045</td>
              <td>INV-0123</td>
              <td>Jhon Doe</td>
              <td>$123</td>
              <td>Paid</td>
              <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Recent Sales End -->

  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"
    ><i class="bi bi-arrow-up"></i
  ></a>
</template>